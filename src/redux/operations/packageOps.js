import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//const BASE_URL = 'localhost:4000/api/1.0/tenders';
const BASE_URL = 'http://127.0.0.1:4000/api/1.0/packages';

export const addPackageOp = createAsyncThunk(
  'packages/addPackage',
  async ({ trackingNumber, phoneNumber }, thunkAPI) => {
    try {
      const {
        // eslint-disable-next-line
        data: { success, data, warnings, error },
      } = await axios.post(`${BASE_URL}/`, { trackingNumber, phoneNumber });
      if (!success) {
        throw error;
      }
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchPackagesOP = createAsyncThunk(
  'packages/fetchPackages',
  async (_, thunkAPI) => {
    try {
      const {
        data: { data, error },
      } = await axios.get(`${BASE_URL}/`);
      if (error) {
        throw error;
      }
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deletePackageOP = createAsyncThunk(
  'tenders/deleteContact',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`${BASE_URL}/` + id);
      if (data.success) {
        return { id: data.id };
      }
      if (data.error) {
        throw data.error;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateContactOp = createAsyncThunk(
  'tenders/udateContact(isFavorite)',
  async ({ id, isFavorite }, thunkAPI) => {
    const tenders = thunkAPI.getState().phonebook.tenders.items;
    const index = tenders.findIndex(contact => contact.id === id);

    try {
      const data = await fetch(`${BASE_URL}/contacts/` + id, {
        method: 'PUT', //mockip doesn't supports PATCH method
        body: JSON.stringify({
          ...tenders[index],
          isFavorite: !isFavorite,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return await data.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
