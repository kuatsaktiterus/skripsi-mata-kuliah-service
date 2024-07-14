export class CommonHandler {
  static toPaginate(current_page: string, per_page: string, total: number) {
    return {
      current_page: current_page,
      last_page: Math.ceil(Number(total) / Number(per_page)),
      per_page: per_page,
      total: total,
    }
  }
}
