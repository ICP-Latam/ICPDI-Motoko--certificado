import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface Certifica {
  'modalidad' : string,
  'instructor' : string,
  'alumno' : string,
  'curso' : string,
  'lugar' : string,
  'usuario' : string,
  'fecha' : string,
}
export interface _SERVICE {
  'actualizaCertificado' : ActorMethod<
    [string, string, string, string, string, string, string],
    boolean
  >,
  'borraCertificado' : ActorMethod<[string], boolean>,
  'crearCertificado' : ActorMethod<
    [string, string, string, string, string, string],
    undefined
  >,
  'getCerificaId' : ActorMethod<[], number>,
  'getCertificado' : ActorMethod<[string], [] | [Certifica]>,
  'getCertificados' : ActorMethod<[], Array<[string, Certifica]>>,
  'whoami' : ActorMethod<[], Principal>,
}
