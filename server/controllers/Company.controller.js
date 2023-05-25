import CompanyService from '../services/Company.service.js';

const companyService = new CompanyService();

export const getAllCompanies = async (_req, res) => {
  try {
    const companies = await companyService.getAllCompanies();
    res.status(200).json(companies);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
