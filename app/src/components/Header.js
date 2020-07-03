import React from 'react'
import Link from 'next/link'

import SortMenu from './SortMenu'

function Header() {
  return (
    <div className="header">
      <Link href="/">
        <a className="logo">
          <img src="/images/logo-1.png" />
        </a>
      </Link>
      <SortMenu />
    </div>
  );
}

export default Header
