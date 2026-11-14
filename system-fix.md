# Aplicação dos ícones do Brand no System Fix

[Ver os 41 ícones novos no catálogo](icons.html?version=0.5.0) · [Manual da marca, página 6](Manual%20de%20identidade%20visual.pdf#page=6) · [Contrato SVG e React](icons.md)

A versão 0.5.0 acrescenta 41 ícones ao catálogo compartilhado do Brand. O System Fix é a primeira referência de aplicação. Os SVGs seguem a seção “Ícones e interface” do manual, com prancheta de 24 × 24, margem óptica nominal de 2 px, massas preenchidas e plano secundário a 60%. Esta variante usa curvas nos cantos e recortes. As silhuetas de funções próximas foram diferenciadas para facilitar a leitura em tamanhos pequenos. A cor vem do contexto via `currentColor`. No catálogo, desmarque o filtro da versão para consultar toda a família, incluindo o Mailer.

## Mapa de adoção

Usos observados no código local do System Fix. As trocas abaixo ficam pendentes de revisão dos ícones.

| Superfície | Ícone atual | Ícone para adoção |
| --- | --- | --- |
| Menu · Ordens de serviço | `clipboard`, prancheta genérica | `work-order` |
| Menu · Clientes | `users`, grupo de pessoas | `customer`, identificação do cliente |
| Menu · Catálogo de serviços | `layers`, camadas | `catalog` |
| Menu · Produtos e estoque | `cube`, objeto genérico | `inventory` |
| Menu · Financeiro | `credit-card`, forma de pagamento | `finance-ledger` |
| Menu · Agenda | `calendar` | Manter para a agenda. Usar `appointment` para um compromisso. |
| Ordem · Atendimento | `ClipboardList`, também usado para auditoria no backoffice | `support` |
| Ordem · Documento de entrega | `FileText`, documento genérico | `delivery-document` |
| Ordem · Histórico | `History`, relógio e seta | `activity-history`, linha de eventos |
| Cliente · Equipamentos | `Monitor`, aplicado a todos os equipamentos | `equipment` para tipo genérico e silhueta específica quando o tipo estiver disponível |
| Cliente · Cadastro de acesso remoto | `MonitorSmartphone`, dois formatos de dispositivo | `remote-access` |

Para navegação e ações comuns, mantenha os ícones correspondentes do Brand, como `grid`, `settings`, `search` e `plus`. Use `laptop` e `server` para os respectivos equipamentos e `monitor` para o periférico. `work-order` representa o registro da OS. `support` representa o contato e acompanhamento do cliente. `task-complete` fecha a execução, `handoff` indica a devolução física e `delivery-document` identifica o registro de entrega.

## Inventário

### Alerts

| Ícone | Uso |
| --- | --- |
| [`equipment-fault`](assets/icons/equipment-fault.svg) | Indicar falha em um equipamento |

### Device

| Ícone | Uso |
| --- | --- |
| [`equipment`](assets/icons/equipment.svg) | Identificar equipamento ou ativo de tipo genérico |
| [`desktop-pc`](assets/icons/desktop-pc.svg) | Identificar computador de mesa |
| [`printer`](assets/icons/printer.svg) | Identificar impressora |
| [`peripherals`](assets/icons/peripherals.svg) | Identificar periféricos e acessórios |
| [`industrial-machine`](assets/icons/industrial-machine.svg) | Identificar uma máquina industrial |
| [`remote-access`](assets/icons/remote-access.svg) | Indicar acesso remoto a um dispositivo |

### Files

| Ícone | Uso |
| --- | --- |
| [`work-order`](assets/icons/work-order.svg) | Identificar uma ordem de trabalho ou de serviço |
| [`delivery-document`](assets/icons/delivery-document.svg) | Identificar o documento que comprova uma entrega |
| [`checklist`](assets/icons/checklist.svg) | Abrir uma lista de verificações |
| [`technical-report`](assets/icons/technical-report.svg) | Identificar um laudo ou relatório técnico |
| [`catalog`](assets/icons/catalog.svg) | Abrir um catálogo de itens ou serviços |

### Workflow

| Ícone | Uso |
| --- | --- |
| [`work-order-add`](assets/icons/work-order-add.svg) | Criar uma ordem de trabalho ou de serviço |
| [`task-start`](assets/icons/task-start.svg) | Iniciar a execução de uma tarefa |
| [`task-complete`](assets/icons/task-complete.svg) | Marcar uma tarefa como concluída |
| [`activity-history`](assets/icons/activity-history.svg) | Consultar a sequência de eventos de um registro |

### Logistics

| Ícone | Uso |
| --- | --- |
| [`intake`](assets/icons/intake.svg) | Registrar a entrada de um item |
| [`handoff`](assets/icons/handoff.svg) | Registrar a entrega física de um item |
| [`spare-parts`](assets/icons/spare-parts.svg) | Identificar peças de reposição |
| [`inventory`](assets/icons/inventory.svg) | Consultar estoque de produtos ou peças |

### Hardware

| Ícone | Uso |
| --- | --- |
| [`cpu`](assets/icons/cpu.svg) | Identificar processador |
| [`gpu`](assets/icons/gpu.svg) | Identificar placa de vídeo dedicada |
| [`ram`](assets/icons/ram.svg) | Identificar módulo de memória RAM |
| [`ssd`](assets/icons/ssd.svg) | Identificar unidade de armazenamento SSD |
| [`motherboard`](assets/icons/motherboard.svg) | Identificar placa-mãe |
| [`power-supply`](assets/icons/power-supply.svg) | Identificar fonte de alimentação |
| [`hard-drive`](assets/icons/hard-drive.svg) | Identificar disco rígido mecânico |

### Tools

| Ícone | Uso |
| --- | --- |
| [`cleaning`](assets/icons/cleaning.svg) | Indicar limpeza de um item ou equipamento |
| [`repair`](assets/icons/repair.svg) | Indicar conserto ou ajuste |
| [`assembly`](assets/icons/assembly.svg) | Indicar montagem de um conjunto |
| [`part-replacement`](assets/icons/part-replacement.svg) | Indicar substituição de uma peça |
| [`functional-test`](assets/icons/functional-test.svg) | Indicar um teste de funcionamento |
| [`diagnosis`](assets/icons/diagnosis.svg) | Investigar a causa de uma falha |
| [`inspection`](assets/icons/inspection.svg) | Indicar inspeção visual ou física |

### People

| Ícone | Uso |
| --- | --- |
| [`customer`](assets/icons/customer.svg) | Identificar um cadastro de cliente |
| [`technician`](assets/icons/technician.svg) | Identificar o profissional técnico responsável |

### Scheduling

| Ícone | Uso |
| --- | --- |
| [`appointment`](assets/icons/appointment.svg) | Identificar um compromisso agendado |

### Communication

| Ícone | Uso |
| --- | --- |
| [`support`](assets/icons/support.svg) | Abrir um canal de atendimento ou suporte |

### Finance

| Ícone | Uso |
| --- | --- |
| [`quote`](assets/icons/quote.svg) | Identificar uma proposta de preço ou orçamento |
| [`finance-ledger`](assets/icons/finance-ledger.svg) | Consultar lançamentos financeiros |

### Security

| Ícone | Uso |
| --- | --- |
| [`warranty`](assets/icons/warranty.svg) | Identificar a garantia de um produto ou serviço |

## Consumo

O gerador React do Brand expõe os mesmos arquivos como componentes. Por exemplo, `work-order` vira `WorkOrderIcon` e `ssd` vira `SsdIcon`. O catálogo permite conferir a leitura em 16, 24 e 32 px, sobre fundo claro e escuro. Em telas do System Fix, associe os ícones aos rótulos existentes e mantenha os nomes acessíveis dos controles.
