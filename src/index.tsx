import * as React from 'react'
import styles from './styles.module.css'

interface Props {
  columnDefs: { headerName: string; field: string }[]
  rowData: any[]
}

export const SwordGrid = ({ columnDefs, rowData }: Props) => {
  return (
    <div className={styles.grid}>
      <div className={styles.header}>
        {columnDefs.map(({ headerName }) => (
          <div key={headerName} className={styles.headerItem}>
            {headerName}
          </div>
        ))}
      </div>
      <div className={styles.content}>
        {rowData.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.row}>
            {columnDefs.map(({ field }, cellIndex) => (
              <div key={cellIndex} className={styles.cell}>
                {row[field]}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
