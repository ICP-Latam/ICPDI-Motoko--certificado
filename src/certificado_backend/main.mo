import HashMap "mo:base/HashMap";
import Nat "mo:base/Nat";
import Iter "mo:base/Iter";
import Nat32 "mo:base/Nat32";
import Text "mo:base/Text";
import Principal "mo:base/Principal";
import Debug "mo:base/Debug";

actor Certificador{
  
	type CertificaId = Nat32;

	type Certifica = {
    	usuario: Text;
		curso: Text;
		alumno: Text;
    	instructor: Text;
    	fecha: Text;
		modalidad: Text;
		lugar: Text;
	};

  stable var certificaID: CertificaId = 0;
  let certificaListado = HashMap.HashMap<Text, Certifica>(0, Text.equal, Text.hash);
  
  private func generaCerificaId() : Nat32 {
		certificaID += 1;
		return certificaID;
	};
	
	public query func getCerificaId() : async Nat32 {
		return certificaID;
	};

  public query ({caller}) func whoami() : async Principal {
		return caller;
	};

  public shared (msg) func crearCertificado(curso: Text, alumno: Text, instructor: Text, fecha: Text, modalidad:Text, lugar:Text) : async () {
		let usuario: Text = Principal.toText(msg.caller);
		let certifica = {usuario=usuario; curso=curso; alumno=alumno; instructor=instructor; fecha=fecha; modalidad=modalidad; lugar=lugar};

		certificaListado.put(Nat32.toText(generaCerificaId()), certifica);
		
		Debug.print("Se registro el certificado! ID: " # Nat32.toText(certificaID));
		return ();
	};

  public query func getCertificados () : async [(Text, Certifica)] {
		let certificaIteracion : Iter.Iter<(Text, Certifica)> = certificaListado.entries();
		let certificadoArreglo : [(Text, Certifica)] = Iter.toArray(certificaIteracion);
		return certificadoArreglo;
	};

  public query func getCertificado (id: Text) : async ? Certifica {
		let certifica: ?Certifica = certificaListado.get(id);
		return certifica;
	};

  public shared (msg) func actualizaCertificado (id: Text, curso: Text, alumno: Text, instructor: Text, fecha: Text, modalidad:Text, lugar:Text) : async Bool {
		let usuario: Text = Principal.toText(msg.caller);
		let certifica: ?Certifica = certificaListado.get(id);

		switch (certifica) {
			case (null) {
				return false;
			};
			case (?certificaActual) {
				let nuevoCertificado: Certifica = {usuario=usuario; curso=curso; alumno=alumno; instructor=instructor; fecha=fecha; modalidad=modalidad; lugar=lugar};
				certificaListado.put(id, nuevoCertificado);
				Debug.print("Se actualizó el registro del certificado! ID:" # id);
				return true;
			};
		};
	};
  
	public func borraCertificado (id: Text) : async Bool {
		let certifica : ?Certifica = certificaListado.get(id);
		switch (certifica) {
			case (null) {
				return false;
			};
			case (_) {
				ignore certificaListado.remove(id);
				Debug.print("Se borró el registro del certificado! ID: " # id);
				return true;
			};
		};
	};
};
