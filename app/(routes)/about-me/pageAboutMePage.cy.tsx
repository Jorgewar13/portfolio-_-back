import React from 'react'
import AboutMePage from './page'

describe('<AboutMePage />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<AboutMePage />)
  })
})