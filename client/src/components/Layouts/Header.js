import React from 'react'
import {PiDogBold} from 'react-icons/pi'
import {AiOutlineShoppingCart} from 'react-icons/ai'


const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" >
    <PiDogBold/> Pet Palace</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="nav justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/About">Categeroy</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Contact">Registor</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Contact">Cart <AiOutlineShoppingCart/></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Contact">Login</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
)
}
export default Header
