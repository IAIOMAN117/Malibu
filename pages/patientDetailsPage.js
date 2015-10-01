

function createPatientDetailPage(patient) {
  var page = tabris.create("Page", {
    title:patient.firstName + " " + patient.lastName
  });

  return page;
}

module.exports = createPatientDetailPage;
