const API_BASE_URL = "https://chain-server-api.onrender.com";
const HEADERS = {
  "Content-Type": "application/json",
};

const ApiMethods = {
  GET: "get",
  POST: "post",
  PUT: "put",
  DELETE: "delete",
};

const ChainInApi = {
  //////////////////////////////
  /////////// USER /////////////
  //////////////////////////////

  createUser: async (
    wallet_address: string | undefined,
    first_name: string,
    last_name: string,
    email_address: string,
    biography: string
  ) => {
    const url = `${API_BASE_URL}/v1/user`;
    const options = {
      method: ApiMethods.POST,
      headers: HEADERS,
      body: JSON.stringify({
        wallet_address,
        first_name,
        last_name,
        email_address,
        biography,
      }),
    };

    const response = await fetch(url, options);

    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  },

  fetchAllUsers: async () => {
    const url = `${API_BASE_URL}/v1/user`;
    const options = {
      method: ApiMethods.GET,
      headers: HEADERS,
    };
    const response = await fetch(url, options);
    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  },

  fetchUserByWalletAddress: async (wallet_address: string) => {
    const url = `${API_BASE_URL}/v1/user/${wallet_address}`;
    const options = {
      method: ApiMethods.GET,
      headers: HEADERS,
    };

    const response = await fetch(url, options);
    if (response.status === 200) {
      const data = await response.json();
      return {
        wallet_address,
        first_name: data.first_name,
        last_name: data.last_name,
        email_address: data.email_address,
        biography: data.biography,
      };
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  },

  updateUserByWalletAddress: async (
    wallet_address: string,
    first_name: string,
    last_name: string,
    email_address: string,
    biography: string
  ) => {
    const url = `${API_BASE_URL}/v1/user/${wallet_address}`;
    const options = {
      method: ApiMethods.PUT,
      headers: HEADERS,
      body: JSON.stringify({
        wallet_address,
        first_name,
        last_name,
        email_address,
        biography,
      }),
    };

    const response = await fetch(url, options);

    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  },

  deleteUserByWalletAddress: async (wallet_address: string) => {
    const url = `${API_BASE_URL}/v1/user/${wallet_address}`;
    const options = {
      method: ApiMethods.DELETE,
      headers: HEADERS,
    };

    const response = await fetch(url, options);

    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  },

  //////////////////////////////////////
  //////////// ORGANISATION ////////////
  //////////////////////////////////////

  createOrganisation: async (
    organisation_name: string,
    organisation_symbol: string,
    organisation_type: string,
    description: string,
    picture_url: string,
    website_url: string,
    creator_wallet_address: string,
    nft_contract_address: string
  ) => {
    const url = `${API_BASE_URL}/v1/organisation`;
    const options = {
      method: ApiMethods.POST,
      headers: HEADERS,
      body: JSON.stringify({
        organisation_name,
        organisation_symbol,
        organisation_type,
        description,
        picture_url,
        website_url,
        creator_wallet_address,
        nft_contract_address,
      }),
    };

    const response = await fetch(url, options);

    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  },

  fetchAllOrganisations: async () => {
    const url = `${API_BASE_URL}/v1/organisation`;
    const options = {
      method: ApiMethods.GET,
      headers: HEADERS,
    };
    const response = await fetch(url, options);
    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  },

  fetchOrganisationByOrganisationName: async (organisation_name: string) => {
    const url = `${API_BASE_URL}/v1/organisation/name/${organisation_name}`;
    const options = {
      method: ApiMethods.GET,
      headers: HEADERS,
    };

    const response = await fetch(url, options);
    if (response.status === 200) {
      const data = await response.json();
      return {
        organisation_id: data.organisation_id,
        organisation_name,
        organisation_symbol: data.organisation_symbol,
        organisation_type: data.organisation_type,
        description: data.description,
        picture_url: data.picture_url,
        website_url: data.website_url,
        creator_wallet_address: data.creator_wallet_address,
        nft_contract_address: data.nft_contract_address,
      };
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  },

  fetchOrganisationByOrganisationSymbol: async (
    organisation_symbol: string
  ) => {
    const url = `${API_BASE_URL}/v1/organisation/symbol/${organisation_symbol}`;
    const options = {
      method: ApiMethods.GET,
      headers: HEADERS,
    };

    const response = await fetch(url, options);
    if (response.status === 200) {
      const data = await response.json();
      return {
        organisation_id: data.organisation_id,
        organisation_name: data.organisation_name,
        organisation_symbol,
        organisation_type: data.organisation_type,
        description: data.description,
        picture_url: data.picture_url,
        website_url: data.website_url,
        creator_wallet_address: data.creator_wallet_address,
        nft_contract_address: data.nft_contract_address,
      };
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  },

  updateOrganisationByOrganisationId: async (
    organisation_id: number,
    organisation_name: string,
    organisation_symbol: string,
    organisation_type: string,
    description: string,
    picture_url: string,
    website_url: string,
    creator_wallet_address: string,
    nft_contract_address: string
  ) => {
    const url = `${API_BASE_URL}/v1/organisation/${organisation_id}`;
    const options = {
      method: ApiMethods.PUT,
      headers: HEADERS,
      body: JSON.stringify({
        organisation_name,
        organisation_symbol,
        organisation_type,
        description,
        picture_url,
        website_url,
        creator_wallet_address,
        nft_contract_address,
      }),
    };

    const response = await fetch(url, options);

    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  },

  deleteOrganisationByOrganisationId: async (organisation_id: number) => {
    const url = `${API_BASE_URL}/v1/organisation/${organisation_id}`;
    const options = {
      method: ApiMethods.DELETE,
      headers: HEADERS,
    };

    const response = await fetch(url, options);

    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  },

  //////////////////////////////////////
  //////////// JOB LISTING /////////////
  //////////////////////////////////////
};

export default ChainInApi;