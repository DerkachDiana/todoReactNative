import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { InfoBox } from './components/infoBox';
import i18next from '../../services/i18n/i18n';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
export const AboutComponent = () => {
  const { t, i18n } = useTranslation();
  return (
    <View style={ styles.container }>
      <Image
        style={ styles.image }
        source={ require('../../assets/images/company.jpg') }
      />
      <InfoBox
        title={ t('translation.aboutCompanyNameTitle') }
        description={ t('translation.aboutCompanyNameDescription') }
      />
      <InfoBox
        title={ t('translation.aboutBiographyTitle') }
        description={t('translation.aboutBiographyDescription')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    borderRadius: 100,
    width: 100,
    height: 100,
    marginVertical: 20,
  },
});
