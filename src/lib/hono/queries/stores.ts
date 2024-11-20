import { StoresResponseData } from "@/app/api/[[...route]]/stores";
import { StoreSchema } from "@/lib/validations/store";
import { honoClient } from "../client";

export async function getStores() {
  const response = await honoClient.api.stores.$get()

  if (!response.ok) {
    throw new Error("Error when fetching stores")
  }

  return await response.json() as StoresResponseData
}

export async function addStore(payload: StoreSchema) {
  return await honoClient.api.stores.$post({
    json: payload
  }) 
}

export async function deleteStore(id: string) {
  return await honoClient.api.stores[":id"].$delete({
    param: { id }
  })
}