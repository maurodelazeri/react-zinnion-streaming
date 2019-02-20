/* global jest, it, describe, expect */

jest.unmock('../src/zinnion-provider')
import React from 'react'
import PropTypes from 'prop-types'
import ZinnionProvider from '../src/zinnion-provider'

describe('ZinnionProvider', () => {
  const config = {url: 'http://localhost:8000/connect', insecure: true}

  it('should throw Exception if the `url` ' +
    'is not provided in the configuration', () => {
    expect(() => { ZinnionProvider({}) }).toThrow()
  })

  it('should provide `zinnion` context', () => {
    const wrapper = new ZinnionProvider({config})
    expect(wrapper.getChildContext().zinnion.constructor.name).toBe('CentManager')
    expect(ZinnionProvider.childContextTypes.zinnion).toBe(PropTypes.object.isRequired)
  })

  it('should render children', () => {
    const div = React.createFactory('div')
    const children = React.createElement(div)
    const wrapper = new ZinnionProvider({config, children})
    const render = wrapper.render()
    expect(render).toBe(children)
  })

  it('should have children proptype required', () => {
    expect(ZinnionProvider.propTypes.children).toBe(PropTypes.element.isRequired)
  })
})
