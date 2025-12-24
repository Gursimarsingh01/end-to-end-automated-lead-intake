module.exports = (lead) => {
  return {
    name: lead.name?.trim(),
    email: lead.email?.toLowerCase().trim(),
    company: lead.company?.trim() || "Unknown",
    source: lead.source || "Website",
    message: lead.message?.trim()
  };
};

