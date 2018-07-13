import {BaseService} from './base.service';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import gql from 'graphql-tag';
import {Apollo, QueryRef} from 'apollo-angular';

// <editor-fold desc="bomdata action">
const bomQueryGQL = gql`
  query getBomDataInfo($go_no:String!,$operationwi_id:String!){
    trimData(go_no: $go_no, operationwi_id:$operationwi_id){
      uuid
      part
      item_class
      ref_no
      product_desc
      qtyxgmt
      supplier
      size_attr
      remarks
      sequence
    }
    interliningData(go_no: $go_no, operationwi_id: $operationwi_id) {
      uuid
      placement
      ref_no
      cut_requirement
      width
      color_attr
      mpd
      supplier
      remarks
      seq
      interlining_type
      consumption_per_pcs
    }
    threadData(go_no: $go_no, operationwi_id: "") {
      uuid
      color_code
      headflag
      item1
      item2
      item3
      item4
      item5
      item6
      item7
      item8
      item9
      item10
      item11
      item12
      item13
      item14
      item15
      item16
      item17
      item18
      item19
      item20
      item21
      item22
      item23
      item24
      item25
      item26
      item27
      item28
      item29
      item30
      item31
      item32
      item33
      item34
      item35
      item36
      item37
      item38
      item39
      item40
      sequence
    }
  }
`;
// </editor-fold>

// <editor-fold desc="saveFabricData action">
const saveFabricData = gql`
  mutation saveFabricData($go_no: String!, $user_name: String!, $fabrics: String!){
    saveFabricData(go_no: $go_no, user_name: $user_name, fabrics: $fabrics)
  }
`;
// </editor-fold>

@Injectable()
export class ConfigService extends BaseService {

  constructor(private http: HttpClient, private _apollo: Apollo) {
    super();
  }

  /***
   * get EscmBomData Info
   * @param {string} go_no
   * @param {string} operationwi_id
   * @returns {QueryRef<any>}
   */
  public getBomDataInfo(go_no: string, operationwi_id: string): QueryRef <any>  {
    return  this._apollo.watchQuery({
      query: bomQueryGQL,
      variables: {
        go_no: go_no,
        operationwi_id: operationwi_id,
      },
      fetchPolicy: 'network-only',
      notifyOnNetworkStatusChange: true,
    });
  }

  /***
   * saveFabs
   * @param {string} go_no
   * @param {string} user_name
   * @param {EmiTyping.ElementFabInfo[]} fabrics
   * @returns {Observable<any>}
   */
  public saveFabs(go_no: string, user_name: string, fabrics: string) {
    return this._apollo.mutate({
      mutation: saveFabricData,
      variables: {
        go_no,
        user_name,
        fabrics
      },
    })
  }
}
