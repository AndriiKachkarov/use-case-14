import React from 'react';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en';
import uk from './uk';
import fr from './fr';

export const LOCALES = {
    EN: {key: 'en', label: 'English'},
    FR: {key: 'fr', label: 'French'},
    UK: {key: 'uk', label: 'Українська'},
}

const resources = {
    [LOCALES.EN.key]: en,
    [LOCALES.FR.key]: fr,
    [LOCALES.UK.key]: uk,
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });