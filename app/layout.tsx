import ClientOnly from './components/ClientOnly';
import RegisterModal from './components/modals/RegisterModal';
import Navbar from './components/navbar/Navbar';
import './globals.css'
import { Laila } from 'next/font/google'
import ToasterProvider from './providers/ToasterProvider';
import LoginModal from './components/modals/LoginModal';
import getCurrentUser from './actions/getCurrentUser';
import RentModal from './components/modals/RentModal';
import SearchModal from './components/modals/SearchModal'

const laila = Laila({subsets:['latin'], weight:['300', '400', '500']});

export const metadata = {
  title: 'Visit-Argentina',
  description: 'Visit-Argentina.com app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={laila.className}>
        <ClientOnly>
          <ToasterProvider />
          <SearchModal />
          <LoginModal />
          <RegisterModal />
          <RentModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className='pb-20 pt-28'>
          {children}
        </div>  
        </body>
    </html>
  )
}
