/* eslint-disable no-bitwise */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
import { utils, writeFile } from 'xlsx'
import i18next from 'i18next'
import * as dayjs from 'dayjs'
import 'dayjs/locale/pt'

export const generateUUID = () => {
  let dt = new Date().getTime()
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (dt + Math.random() * 16) % 16 | 0
    dt = Math.floor(dt / 16)
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16)
  })
  return uuid
}

export const formatDate = (date: string | Date = new Date()) => {
  dayjs.locale(`${i18next.t('defaults.lang')}`)
  const d = dayjs(date)

  return {
    unformattedDate: d,
    displayDate: d.format('LL'),
    fullDate: d.format('DD/MM/YYYY'),
    fullDateReverse: d.format('YYYY/MM/DD'),
    fullDateDash: d.format('DD-MM-YYYY'),
    fullDateDashReverse: d.format('YYYY-MM-DD'),
    fullDateMonth: d.format('DD/MMM/YYYY'),
    fullDateMonthReverse: d.format('YYYY/MMM/DD'),
    time: d.format('LT'),
    timeWithSeconds: d.format('LTS'),
    fullDateTime: d.format('YYYY-MM-DDTHH:mm:ssZ')
  }
}

export const formatMoney = (number: number, currency: boolean = false) => (
  currency
    ? `${Number.parseFloat(`${number}`).toLocaleString('pt', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })} MZN`
    : Number.parseFloat(`${number}`).toLocaleString('pt', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
)

export const generateWorksheet = (reportArray: any, name: string) => {
  const wb = utils.book_new() // create a new book
  const ws = utils.json_to_sheet(reportArray) // create a new worksheet

  const { fullDateDash } = formatDate(new Date())

  utils.book_append_sheet(wb, ws)
  writeFile(wb, `relatorio_${name}_${fullDateDash}.xlsx`)
}