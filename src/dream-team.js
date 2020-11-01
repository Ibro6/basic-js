module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  const wrongMembers = members.filter(i => typeof i === "string");

  const str = wrongMembers.reduce((acc, element) => {
    acc.push(element.trim().toUpperCase()[0]);
    return acc;
  }, []);
  if (members.length === 0 || wrongMembers.length === 0 || str.length === 0)
    return false;

  return str.length ? str.sort().join("") : false;
};
