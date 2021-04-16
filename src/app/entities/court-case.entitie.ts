export class CourtCase {
  courtCaseId!: number;
  typeCase!: TypeCase;
  typeLegalProceedings!: TypeLegalProceedings;
  dateReceiptPrimaryDocument!: string;
  basisIntroductionCriminalCase!: number;
  dateProductionEnd!: string;
  dateEffectiveDecision!: string;
  subjectDispute!: string;
  basisDispute!: string;
  resultDispute!: number;
  directionDispute!: number;
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
