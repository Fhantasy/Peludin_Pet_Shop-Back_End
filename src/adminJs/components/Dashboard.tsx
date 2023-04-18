import React, { useEffect, useState } from "react";
import {
  H1,
  H2,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@adminjs/design-system";
import { ApiClient, useCurrentAdmin } from "adminjs";

export default function Dashboard() {
  const [currentAdmin] = useCurrentAdmin();
  const [resources, setResources] = useState<{ [key: string]: number }>();
  const api = new ApiClient();

  useEffect(() => {
    fetchDashboardData();
  }, []);

  async function fetchDashboardData() {
    const res = await api.getDashboard();
    setResources(res.data);
  }
  return (
    <>
      <section style={{ padding: "1.5rem" }}>
        <H1>Seja Bem Vindo(a) {currentAdmin?.firstName}</H1>
      </section>
      <section style={{ backgroundColor: "#FFF", padding: "1.5rem" }}>
        <H2>RESUMO</H2>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "#14888b" }}>
              <TableCell style={{ color: "white" }}>Recurso</TableCell>
              <TableCell style={{ color: "white" }}>Registros</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {resources ? (
              Object.entries(resources).map(([resource, count]) => (
                <TableRow key={resource} style={{ backgroundColor: "#eee9e5" }}>
                  <TableCell>{resource}</TableCell>
                  <TableCell>{count}</TableCell>
                </TableRow>
              ))
            ) : (
              <></>
            )}
          </TableBody>
        </Table>
      </section>
    </>
  );
}
