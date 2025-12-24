module.exports = (lead) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!lead.email || !emailRegex.test(lead.email)) {
    throw new Error("Invalid email address");
  }

  if (!lead.message || lead.message.length < 10) {
    throw new Error("Low-quality or empty lead");
  }

  return lead;
};

