import React from 'react';
import { t } from 'i18next';
import {LOCALES} from "../locales";

const coefMap = {
    [LOCALES.EN.key]: 0.393700787,
}

const formatLength = (value, locale) => {
    let formattedValue = value;

    if (locale in coefMap) {
        formattedValue = Math.round(formattedValue * coefMap[locale]);
    }

    formattedValue = new Intl.NumberFormat(locale).format(formattedValue);

    return `${formattedValue} ${t('lengthUnit')}`;
}

export default formatLength;