import { apiRequest } from "./api";

export function readSheet(sheet) {
  return apiRequest("readSheet", { sheet });
}

export function addRow(sheet, row) {
  return apiRequest("addRow", { sheet, row });
}

export function updateRow(sheet, rowIndex, row) {
  return apiRequest("updateRow", { sheet, rowIndex, row });
}

export function deleteRow(sheet, rowIndex) {
  return apiRequest("deleteRow", { sheet, rowIndex });
}
