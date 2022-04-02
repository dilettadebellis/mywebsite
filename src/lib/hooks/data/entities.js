import { useEffect, useState } from "react";
import apiClient from "../../api-client";
import useGlobalState from "../../globalState";

export function useEntityAllData(entityName, setLoading = undefined) {
  const { lang } = useGlobalState();
  const [data, setData] = useState([]);

  const loadEntityData = async () => {
    try {
      if (setLoading) {
        setLoading(true);
      }
      const responseData = (
        await apiClient.entities.getAll(entityName, { locale: lang })
      ).data[entityName];
      setData(responseData);
    } catch (err) {
      console.log(err);
      if (setLoading) {
        setLoading(false);
      }
    } finally {
      if (setLoading) {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    loadEntityData();
    return () => setData([]);
  }, [entityName]);

  return data;
}

export function useEntitySingleRowData(entityName, setLoading = undefined) {
  const { lang } = useGlobalState();
  const [data, setData] = useState([]);

  const loadEntityData = async () => {
    try {
      if (setLoading) {
        setLoading(true);
      }
      const responseData = (
        await apiClient.entities.getAll(entityName, { locale: lang })
      ).data[entityName];
      if (responseData) {
        if (responseData.length > 0) {
          setData(responseData[0]);
        }
      }
    } catch (err) {
      console.log(err);
      if (setLoading) {
        setLoading(false);
      }
    } finally {
      if (setLoading) {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    loadEntityData();
    return () => setData([]);
  }, [entityName]);

  return data;
}

export function useEntityDataById(entityName, entityId) {
  const { lang } = useGlobalState();
  const [data, setData] = useState(null);

  const loadEntityData = async () => {
    try {
      const responseData = (
        await apiClient.entities.getById(entityName, entityId, { locale: lang })
      ).data;
      setData(responseData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (entityId) {
      loadEntityData();
    }
    return () => setData(null);
  }, [entityName, entityId]);

  return data;
}
