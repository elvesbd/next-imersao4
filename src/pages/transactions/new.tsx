import { Box, Button, Container, TextField, Grid, MenuItem } from "@material-ui/core";
import { NextPage } from 'next';
import { parseISO, format } from "date-fns";
import AddIcon from "@material-ui/icons/Add";


import { useRouter } from 'next/dist/client/router';
import {TransactionCategoryLabels, TransactionTypeLabels } from '../../interfaces/interfaces';
import http from '../../utils/http';
import React from "react";
import { useForm } from "react-hook-form";
import makeHttp from "../../utils/http";
import { useKeycloak } from "@react-keycloak/ssr";
import { Page } from "../../components/Page";

const NewTransaction: NextPage = () => {
  const { register, handleSubmit } = useForm();
  const { initialized, keycloak } = useKeycloak();
  const router = useRouter();

  async function onSubmit(data: any) {
    try {
      await makeHttp().post("transactions", data);
      router.push("/transactions");
    } catch (e) {
      console.error(e);
    }
  }

  if (
    typeof window !== "undefined" &&
    initialized &&
    !keycloak?.authenticated
  ) {
    router.replace(`/login?from=${window!.location.pathname}`);
    return null;
  }

  return (
    <Page>
      <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container>
          <Grid item xs={12} md={6}>
            <TextField
            {...register("payment_date")}
              type="date"
              required
              label="Data pagamento"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />

            <TextField
            {...register("name")}
              label="Nome"
              required
              fullWidth
              inputProps={{ maxLength: 255 }}
            />

            <TextField
            {...register("description")}
              label="Descrição"
              required
              fullWidth
            />

            <TextField
            {...register("category")}
              select
              required
              label="Categoria"
              fullWidth
            >
              {TransactionCategoryLabels.map((i, key) => (
                <MenuItem key={key} value={i.value}>
                  {i.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
            {...register("amount", { valueAsNumber: true })}
              required
              type="number"
              label="Valor"
              fullWidth
            />

            <TextField
            {...register("type")}
              select
              required
              label="Tipo de operação"
              fullWidth
            >
              {TransactionTypeLabels.map((i, key) => (
                <MenuItem key={key} value={i.value}>
                  {i.label}
                </MenuItem>
              ))}
            </TextField>

            <Box marginTop={2}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Salvar
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Page>
  );
}

export default NewTransaction;
