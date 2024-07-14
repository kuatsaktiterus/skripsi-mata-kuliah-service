export type MataKuliahResponse = {
  id: string;
  kode_mk: string;
  nama_mk: string;
  sks: number,
  createdAt: Date
  updatedAt: Date
}

export type JurusanResponse = {
  id: string;
  nama_jurusan: string;
  createdAt: Date;
  updatedAt: Date;
}

export type SemesterResponse = {
  id: string;
  semester: string;
  batasKrs: number
  createdAt: Date
  updatedAt: Date
}

export type SemesterJurusanMkResponse = {
  id: string;
  jurusanId: string;
  semesterId: string;
  mataKuliahId: string;
  createdAt: Date;
  updatedAt: Date;
}

export type NilaiResponse = {
  id: string;
  nilai: string;
  bobot: number;
  createdAt: Date;
  updatedAt: Date;
}

export type Paging = {
  meta: {
    current_page: string;
    last_page: number;
    per_page: string;
    total: number;
  }
}

export type ErrorResponse = {
  code: number;
  status: string;
  errors?: string | object;
}
