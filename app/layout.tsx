import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SkillMatch — Match Resumes to Job Skills Automatically',
  description: 'Upload your resume, analyze LinkedIn job postings, and discover skill gaps with AI-powered keyword optimization suggestions.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f184548f-af3b-429c-93bf-607361b218a8"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
