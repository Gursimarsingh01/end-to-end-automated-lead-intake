module.exports = (lead) => {
  // Pseudo-check (actual implementation uses Google Sheets / CRM API)
  if (lead.isDuplicate) {
    lead.status = "Duplicate";
    lead.skip = true;
  } else {
    lead.status = "New";
    lead.skip = false;
  }

  return lead;
};
