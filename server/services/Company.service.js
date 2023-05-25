import Company from '../models/Company.model.js';

class CompanyService {
  async getAllCompanies() {
    const companies = await Company.find({});
    return companies;
  }
}

export default CompanyService;
