import ipaImage from '../assets/images/beers/ipa.png'
import lagerImage from '../assets/images/beers/lager.png'
import stoutImage from '../assets/images/beers/stout.png'
import porterImage from '../assets/images/beers/porter.png'
import sourImage from '../assets/images/beers/sourale.png'
import wheatImage from '../assets/images/beers/wheatbeer.png'
import amberImage from '../assets/images/beers/amberale.png'
import paleAleImage from '../assets/images/beers/paleale.png'
import craftBeerImage from '../assets/images/beers/craftbeer.png'
import rumPorterImage from '../assets/images/beers/rumagedimperialporter.png'

export function getBeerImage(beer) {
  const text = `
    ${beer?.name || ''}
    ${beer?.style || ''}
    ${beer?.tagline || ''}
    ${beer?.description || ''}
  `.toLowerCase()

  if (text.includes('rum') && text.includes('porter')) return rumPorterImage
  if (text.includes('imperial') && text.includes('porter')) return rumPorterImage

  if (text.includes('ipa')) return ipaImage
  if (text.includes('lager')) return lagerImage
  if (text.includes('stout')) return stoutImage
  if (text.includes('porter')) return porterImage
  if (text.includes('wheat')) return wheatImage
  if (text.includes('sour')) return sourImage
  if (text.includes('amber')) return amberImage
  if (text.includes('pale ale')) return paleAleImage
  if (text.includes('pale')) return paleAleImage

  return craftBeerImage
}