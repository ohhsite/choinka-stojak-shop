import type { VercelRequest, VercelResponse } from '@vercel/node'
import nodemailer from 'nodemailer'

// Serverless function to send contact form emails via SMTP
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  try {
    const {
      kontakt,
      telefon,
      email,
      uwagi,
      firma,
      nip,
      adres,
      products,
    } = req.body || {}

    if (!kontakt || !telefon || !email) {
      return res.status(400).json({ error: 'Brak wymaganych pól formularza.' })
    }

    const host = process.env.SMTP_HOST || 'mail-serwer127727.lh.pl'
    const port = Number(process.env.SMTP_PORT || 465)
    const secure = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === 'true' : port === 465
    const user = process.env.SMTP_USER
    const pass = process.env.SMTP_PASS
    const toEmail = process.env.TO_EMAIL || 'kontakt@stojakinachoinke.pl'
    const fromEmail = process.env.FROM_EMAIL || user || 'no-reply@stojakinachoinke.pl'

    if (!user || !pass) {
      return res.status(500).json({ error: 'Brak konfiguracji SMTP (SMTP_USER/SMTP_PASS).' })
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    })

    const subject = firma 
      ? `Zapytanie B2B – ${firma} (${kontakt})`
      : `Zapytanie ofertowe – ${kontakt}`

    let plain = `Zapytanie ofertowe – stojaki na choinkę\n\n`
    plain += `Osoba kontaktowa: ${kontakt}\n`
    plain += `Email: ${email}\n`
    plain += `Telefon: ${telefon}\n`
    
    if (firma) {
      plain += `Firma: ${firma}\n`
    }
    if (nip) {
      plain += `NIP: ${nip}\n`
    }
    if (adres) {
      plain += `Adres dostawy: ${adres}\n`
    }
    if (products && products.length > 0) {
      plain += `\nProdukty:\n`
      products.forEach((p: any) => {
        plain += `- ${p.product} (${p.quantity} szt.)\n`
      })
    }
    if (uwagi) {
      plain += `\nUwagi: ${uwagi}\n`
    }
    plain += `\nWiadomość wysłana z formularza kontaktowego.`

    let html = `<h2>Zapytanie ofertowe – stojaki na choinkę</h2><ul>`
    html += `<li><strong>Osoba kontaktowa:</strong> ${escapeHtml(kontakt)}</li>`
    html += `<li><strong>Email:</strong> ${escapeHtml(email)}</li>`
    html += `<li><strong>Telefon:</strong> ${escapeHtml(telefon)}</li>`
    
    if (firma) {
      html += `<li><strong>Firma:</strong> ${escapeHtml(firma)}</li>`
    }
    if (nip) {
      html += `<li><strong>NIP:</strong> ${escapeHtml(nip)}</li>`
    }
    if (adres) {
      html += `<li><strong>Adres dostawy:</strong> ${escapeHtml(adres)}</li>`
    }
    html += `</ul>`
    
    if (products && products.length > 0) {
      html += `<h3>Produkty:</h3><ul>`
      products.forEach((p: any) => {
        html += `<li>${escapeHtml(p.product)} - <strong>${p.quantity} szt.</strong></li>`
      })
      html += `</ul>`
    }
    
    if (uwagi) {
      html += `<p><strong>Uwagi:</strong><br>${escapeHtml(uwagi)}</p>`
    }
    html += `<p style="color:#64748b">Wiadomość wysłana z formularza kontaktowego.</p>`

    await transporter.sendMail({
      from: {
        name: 'Formularz Kontaktowy – Stojaki na Choinkę',
        address: fromEmail,
      },
      to: toEmail,
      replyTo: email,
      subject,
      text: plain,
      html,
    })

    return res.status(200).json({ ok: true })
  } catch (err: any) {
    console.error('Email send error:', err);
    console.error('Error details:', {
      message: err.message,
      code: err.code,
      command: err.command,
      response: err.response,
    });
    return res.status(500).json({ 
      error: 'Nie udało się wysłać wiadomości.',
      details: err.message 
    });
  }
}

function escapeHtml(input: string) {
  return String(input)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
