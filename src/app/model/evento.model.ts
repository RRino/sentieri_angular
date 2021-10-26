 export class Evento {
  constructor (
    public idt: number,
    public catid: string,         // nome della linea
    public inizio: string,   // numero passeggeri in chat
    public title: string          // orario partenza
    ) {}
}
