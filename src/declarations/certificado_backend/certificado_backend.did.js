export const idlFactory = ({ IDL }) => {
  const Certifica = IDL.Record({
    'modalidad' : IDL.Text,
    'instructor' : IDL.Text,
    'alumno' : IDL.Text,
    'curso' : IDL.Text,
    'lugar' : IDL.Text,
    'usuario' : IDL.Text,
    'fecha' : IDL.Text,
  });
  return IDL.Service({
    'actualizaCertificado' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Text, IDL.Text, IDL.Text, IDL.Text, IDL.Text],
        [IDL.Bool],
        [],
      ),
    'borraCertificado' : IDL.Func([IDL.Text], [IDL.Bool], []),
    'crearCertificado' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Text, IDL.Text, IDL.Text, IDL.Text],
        [],
        [],
      ),
    'getCerificaId' : IDL.Func([], [IDL.Nat32], ['query']),
    'getCertificado' : IDL.Func([IDL.Text], [IDL.Opt(Certifica)], ['query']),
    'getCertificados' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Text, Certifica))],
        ['query'],
      ),
    'whoami' : IDL.Func([], [IDL.Principal], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
