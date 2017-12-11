import React, { Component } from 'react';


export default class Root extends Component {
  constructor() {
    super()
  }


  render() {
    return (
            <div>
              <section className="landingIntro">
                <div className="landingIntroText">
                  <h1>Welcome to Hogwarts</h1>
                </div>
                <img className="landingIntroImage" src="http://cdn.playbuzz.com/cdn/7aa950b4-eaa0-417d-93af-3bd332dc8086/5e549d0d-aad1-4ec1-96c9-31e36f08af8c.jpg"/>
              </section>
            </div>
            )
  }
}

