import { DataGrid } from "@mui/x-data-grid";

const rows = [
  { id: 1, firstName: "John", lastName: "Doe", age: 18, grade: 12 },
  { id: 2, firstName: "Alice", lastName: "Smith", age: 17, grade: 11 },
  { id: 3, firstName: "Bob", lastName: "Johnson", age: 18, grade: 12 },
  { id: 4, firstName: "Emily", lastName: "Brown", age: 17, grade: 11 },
  { id: 5, firstName: "Michael", lastName: "Jones", age: 18, grade: 12 },
  { id: 6, firstName: "Emma", lastName: "Davis", age: 17, grade: 11 },
  { id: 7, firstName: "Daniel", lastName: "Miller", age: 18, grade: 12 },
  { id: 8, firstName: "Olivia", lastName: "Wilson", age: 17, grade: 11 },
  { id: 9, firstName: "Matthew", lastName: "Taylor", age: 18, grade: 12 },
  { id: 10, firstName: "Sophia", lastName: "Anderson", age: 17, grade: 11 },
];

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First Name", width: 150 },
  { field: "lastName", headerName: "Last Name", width: 150 },
  { field: "age", headerName: "Age", width: 90 },
  { field: "grade", headerName: "Grade", width: 90 },
];

export default function App() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-8">
      <h2 className="text-2xl font-semibold">Datagrid Data</h2>
      <div className="max-w-screen-lg w-full bg-white p-8 rounded-lg">
        <DataGrid rows={rows} columns={columns} />
      </div>
    </div>
  );
}
