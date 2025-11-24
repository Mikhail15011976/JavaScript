import { useState, useEffect } from 'react';
import styles from './ColorConverter.module.css';

const ColorConverter = () => {
  const [hexValue, setHexValue] = useState('');
  const [rgbValue, setRgbValue] = useState('');
  const [isError, setIsError] = useState(false);
  const [bgColor, setBgColor] = useState('#ffffff');
  const [outputBg, setOutputBg] = useState('#ffffff');

  useEffect(() => {
    if (hexValue.length === 7) {
      if (isValidHex(hexValue)) {
        const rgb = hexToRgb(hexValue);
        setRgbValue(`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`);
        setIsError(false);
        setBgColor(hexValue);
        setOutputBg(darkenColor(hexValue, 20));
      } else {
        setRgbValue('Ошибка!');
        setIsError(true);
        setBgColor('#ff4444');
        setOutputBg('#e04040');
      }
    } else {
      setRgbValue('');
      setBgColor('#ffffff');
      setOutputBg('#ffffff');
    }
  }, [hexValue]);

  const isValidHex = (hex) => /^#[0-9A-Fa-f]{6}$/.test(hex);

  const hexToRgb = (hex) => {
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);
    return { r, g, b };
  };

  const darkenColor = (hex, percent) => {
    let r = parseInt(hex.substring(1, 3), 16);
    let g = parseInt(hex.substring(3, 5), 16);
    let b = parseInt(hex.substring(5, 7), 16);

    r = Math.floor(r * (100 - percent) / 100);
    g = Math.floor(g * (100 - percent) / 100);
    b = Math.floor(b * (100 - percent) / 100);

    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  };

  const handleChange = (e) => {
    const value = e.target.value;
    if (value.length <= 7) setHexValue(value);
  };

  return (
    <div className={styles.container} style={{ backgroundColor: bgColor }}>
      <div className={styles.wrapper}>
        <input
          type="text"
          className={styles.input}
          value={hexValue}
          onChange={handleChange}
          placeholder="#RRGGBB"
          maxLength={7}
        />
        <div 
          className={`${styles.output} ${isError ? styles.error : ''}`}
          style={{ 
            backgroundColor: outputBg,
            color: isError ? '#ffffff' : getContrastColor(outputBg)
          }}
        >
          {rgbValue}
        </div>
      </div>
    </div>
  );
};

function getContrastColor(hexColor) {
  if (hexColor === '#ffffff') return '#000000';
  const r = parseInt(hexColor.substring(1, 3), 16);
  const g = parseInt(hexColor.substring(3, 5), 16);
  const b = parseInt(hexColor.substring(5, 7), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128 ? '#000000' : '#ffffff';
}

export default ColorConverter;