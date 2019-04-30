function getRecordEntry(formData) {
  const willRate = formData.get('rating-decision') === 'yes';
  const score = parseInt(formData.get('rating-score'));

  const record = {
    albumTitle: formData.get('album-title'),
    artistName: formData.get('artist-name'),
    catalogNumber: formData.get('catalog-number'),
    recordColor: formData.get('color'),
    recordRPM: formData.get('rpm'),
    recordCondition: formData.get('condition'),
    recordGenere: formData.getAll('genere'),
    ratingDecision: willRate,
    ratingScore: score
  };
  return record;
}

export default getRecordEntry;