import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MedicalManagementService {
  private httpOptionsPost;
  private httpOptions;
  constructor(private http: HttpClient) {
    this.httpOptionsPost = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRhdGhhZ2F0Lmxva2hhbmRlQHZpdHJheWF0ZWNoLmNvbSIsInJvbGVzIjpbImFkbWluIl0sImV4cCI6MTc3NTI0MTMyOH0.6aoSzpr6fFyBXmjCrT8w4j6L6-8TDgGNjF6_Qhl9e6I',
      }),
    };

    this.httpOptions = {
      headers: new HttpHeaders({
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRhdGhhZ2F0Lmxva2hhbmRlQHZpdHJheWF0ZWNoLmNvbSIsInJvbGVzIjpbImFkbWluIl0sImV4cCI6MTc3NTI0MTMyOH0.6aoSzpr6fFyBXmjCrT8w4j6L6-8TDgGNjF6_Qhl9e6I',
      }),
    };
  }

  getDiagnosisList(): Observable<any> {
    return this.http.get(
      `https://tarifflbdev.vitrayatech.com/opd/protocols/diagnosislist`,
      this.httpOptions
    );
  }

  getMedicalDetails(requestBody: any): Observable<any> {
    return this.http.post(
      `https://tarifflbdev.vitrayatech.com/opd/medical`,
      requestBody,
      this.httpOptionsPost
    );
  }
}
