export const companiesSelector = ({ companies: { data } }) => data;
export const companyLoadingSelector = ({ companies: { loading } }) => loading;
export const companyErrorSelector = ({ companies: { error } }) => error;
