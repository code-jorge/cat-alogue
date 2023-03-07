import React from 'react'
import css from './Loader.module.css'

const Loader = ()=> (
  <div className={css.loader}>
    <div className={css.spinner}>
      <div className={css.ball} />
      <div className={css.ball} />
      <div className={css.ball} />
      <div className={css.ball} />
    </div>
  </div>
)

export default Loader