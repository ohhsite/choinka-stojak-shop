import type { VercelRequest, VercelResponse } from '@vercel/node'
import nodemailer from 'nodemailer'

// Serverless function to send wholesale inquiry emails via SMTP
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  try {
    const {
      companyName,
      nip,
      contactPerson,
      email,
      phone,
      address,
      estimatedQuantity,
      preferredProducts,
      additionalInfo,
    } = req.body || {}

    if (!companyName || !contactPerson || !email || !phone || !estimatedQuantity) {
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

    const subject = `Zapytanie HURT – ${companyName} (${estimatedQuantity})`

    const plain = `Zapytanie o ofertę hurtową – stojaki na choinkę

Firma: ${companyName}
NIP: ${nip || '-'}
Osoba kontaktowa: ${contactPerson}
Email: ${email}
Telefon: ${phone}
Adres: ${address || '-'}
Szacowana ilość: ${estimatedQuantity}
Preferowane produkty: ${preferredProducts || '-'}
Dodatkowe informacje: ${additionalInfo || '-'}

Wiadomość wysłana z formularza hurtowego.`

    const html = `
      <h2>Zapytanie o ofertę hurtową – stojaki na choinkę</h2>
      <ul>
        <li><strong>Firma:</strong> ${escapeHtml(companyName)}</li>
        <li><strong>NIP:</strong> ${escapeHtml(nip || '-')}</li>
        <li><strong>Osoba kontaktowa:</strong> ${escapeHtml(contactPerson)}</li>
        <li><strong>Email:</strong> ${escapeHtml(email)}</li>
        <li><strong>Telefon:</strong> ${escapeHtml(phone)}</li>
        <li><strong>Adres:</strong> ${escapeHtml(address || '-')}</li>
        <li><strong>Szacowana ilość:</strong> ${escapeHtml(estimatedQuantity)}</li>
        <li><strong>Preferowane produkty:</strong> ${escapeHtml(preferredProducts || '-')}</li>
        <li><strong>Dodatkowe informacje:</strong> ${escapeHtml(additionalInfo || '-')}</li>
      </ul>
      <p style="color:#64748b">Wiadomość wysłana z formularza hurtowego.</p>
    `

    await transporter.sendMail({
      from: {
        name: 'Formularz Hurt – Stojaki na Choinkę',
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
    console.error('Email send error:', err)
    return res.status(500).json({ error: 'Nie udało się wysłać wiadomości.' })
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
