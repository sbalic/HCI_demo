import React from 'react'

import NavigationBar from '../NavigationBar'
import Combobox from '../Combobox'
import styles from './style.module.css'

const Navigation = (props) => (
  <section className ={styles.navigation}>
    <NavigationBar activeTab={props.activeTab} />
    <Combobox />
  </section>
)

export default Navigation