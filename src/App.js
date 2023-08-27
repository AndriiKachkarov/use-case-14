import React from 'react';
import {useTranslation} from 'react-i18next'
import {LOCALES} from './locales';
import formatLength from './utils/formatLength';
import formatWeight from './utils/formatWeight';
import formatVolume from './utils/formatVolume';

const App = () => {
    const {t, i18n} = useTranslation();

    const handleSelect = (e) => {
        console.log(e.target.value)
        i18n.changeLanguage(e.target.value)
    };

    return (
        <div>
            <select onChange={handleSelect}>
                {Object.values(LOCALES).map(({key, label}) => <option key={key} value={key}>{label}</option>)}
            </select>
            <p>{t('intlDateTime', {
                val: new Date(Date.UTC(2012, 11, 20, 3, 0, 0)),
                formatParams: {
                    val: {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'},
                },
            })}</p>
            <p>{t('intlRelativeTime', {val: 3})}</p>
            <p>{t('intlRelativeTimeWithOptions', {val: -3})}</p>
            <p>{t('intlRelativeTimeWithOptionsExplicit', {val: -3})}</p>
            <p>{t('intlRelativeTimeWithOptionsExplicit', {val: -3, style: 'long'})}</p>
            <p>{t('intlNumber', {val: 10000000, minimumFractionDigits: 2})}</p>
            <p>{t('intlNumber', {val: 10.64564, maximumSignificantDigits: 5})}</p>
            <p>{t('intlNumber', {val: 100.532325, maximumFractionDigits: 3})}</p>
            <p>{t('intlNumber', {val: 9, minimumIntegerDigits: 3})}</p>
            <p>{formatLength(1000, i18n.language)}</p>
            <p>{formatWeight(1000, i18n.language)}</p>
            <p>{formatVolume(1000, i18n.language)}</p>
        </div>
    );
};
export default App;