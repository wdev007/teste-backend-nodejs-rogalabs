export default interface ICreateDenunciationsDTO {
  latitude: string;
  longitude: string;
  denunciante: {
    name: string;
    cpf: string;
  };
  denuncia: {
    title: string;
    descricao: string;
  };
}
