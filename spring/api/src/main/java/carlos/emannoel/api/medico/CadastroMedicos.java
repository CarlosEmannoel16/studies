package carlos.emannoel.api.medico;

import carlos.emannoel.api.endereco.DadosEndereco;

public record CadastroMedicos(String name, String email, String crm, Epecialidade especialidade, DadosEndereco endereco) {
}
