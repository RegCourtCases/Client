export class CourtCase {
  courtCaseId!: number;
  typeCase!: TypeCase;
  typeLegalProceedings!: TypeLegalProceedings;
  dateReceiptPrimaryDocument!: string;
  basisIntroductionCriminalCase!: BasisIntroductionCriminalCase;
  dateProductionEnd!: string;
  dateEffectiveDecision!: string;
  subjectDispute!: string;
  basisDispute!: string;
  resultDispute!: ResultDispute;
  directionDispute!: DirectionDispute;
}

export enum TypeCase {
  'Уголовное',
  'Административное',
  'Гражданское',
}

export enum TypeLegalProceedings {
  'Конституционное',
  'Уголовное',
  'Гражданское',
  'Арбитражное',
  'Административное',
}

export enum ResultDispute {
  'Выиграли',
  'Проиграли',
  'Выиграли частично',
}

export enum DirectionDispute {
  'Не определено',
  'Входящее',
  'Исходящее',
  'Третья сторона',
}

export enum BasisIntroductionCriminalCase {
  'Явка с повинной',
  'Рапорт об обнаружение признаков преступления',
  'Сообщение из других источников',
  'Письменное заявление о преступлении',
  'Устное заявление о преступлении',
}

export enum TypeInstance {
  'Первая',
  'Апелляция',
  'Кассация',
  'Надзор (субъект)',
  'Надзор (верховный суд)',
  'Исполнительное производство',
}

export enum SolutionType {
  
}