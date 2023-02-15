import Navigation from '@/components/Navigation'
import { contentTypes, Homepage, Page } from '@/models'
import { getNavigationItems } from '@/services/kontent'
import './globals.css'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const menu = await getNavigationData()

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Navigation menu={menu} />
        {children}
      </body>
    </html>
  )
}

async function getNavigationData() {
  const homepageCodename = contentTypes.homepage.codename
  const homeSubpagesElement = contentTypes.homepage.elements.subpages.codename
  const home = await getNavigationItems<Homepage>(homepageCodename, homeSubpagesElement, 'title', 'url', 3)

  return home.elements.subpages.linkedItems
}
