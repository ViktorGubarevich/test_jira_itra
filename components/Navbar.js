import Link from 'next/link'
import Image from 'next/image'
import { useContext } from 'react'
import AuthContext from '../stores/authContext'


export default function Navbar() {

  const { user, login } = useContext(AuthContext);
  console.log(user)

  return (
    <div className="container">
      <nav>
        <Link href="/">
          <a>
            <div className="container-nav">
              <Image src="/jira.png" width={60} height={48} />
              <h1>Jira</h1>
            </div>
          </a>
        </Link>
        <ul>
          <li><Link href="/"><a>Home</a></Link></li>
          <li onClick={login} className="btn">Login/Signup</li>
          {/* <li><Link href="/guides"><a>Guides</a></Link></li> */}
        </ul>
      </nav>
      <div className="banner">
        <Image src="/banner.png" width={566} height={276} />
      </div>
    </div>
  )
}
