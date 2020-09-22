Search.setIndex({docnames:["index","installation","library","models","running","training"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["index.rst","installation.rst","library.rst","models.md","running.rst","training.md"],objects:{"comet.models":{model_base:[2,0,0,"-"]},"comet.models.encoders":{bert:[2,0,0,"-"],encoder_base:[2,0,0,"-"],laser:[2,0,0,"-"],xlmr:[2,0,0,"-"]},"comet.models.encoders.bert":{BERTEncoder:[2,1,1,""]},"comet.models.encoders.bert.BERTEncoder":{forward:[2,2,1,""],freeze_embeddings:[2,2,1,""],from_pretrained:[2,2,1,""],layerwise_lr:[2,2,1,""]},"comet.models.encoders.encoder_base":{Encoder:[2,1,1,""]},"comet.models.encoders.encoder_base.Encoder":{check_lengths:[2,2,1,""],forward:[2,2,1,""],freeze:[2,2,1,""],freeze_embeddings:[2,2,1,""],from_pretrained:[2,2,1,""],layerwise_lr:[2,2,1,""],lm_head:[2,2,1,""],max_positions:[2,2,1,""],num_layers:[2,2,1,""],output_units:[2,2,1,""],prepare_sample:[2,2,1,""],unfreeze:[2,2,1,""]},"comet.models.encoders.laser":{LASEREncoder:[2,1,1,""]},"comet.models.encoders.laser.LASEREncoder":{forward:[2,2,1,""],freeze_embeddings:[2,2,1,""],from_pretrained:[2,2,1,""],max_positions:[2,2,1,""],num_layers:[2,2,1,""],reorder_output:[2,2,1,""]},"comet.models.encoders.xlmr":{XLMREncoder:[2,1,1,""]},"comet.models.encoders.xlmr.XLMREncoder":{forward:[2,2,1,""],freeze_embeddings:[2,2,1,""],from_pretrained:[2,2,1,""],layerwise_lr:[2,2,1,""],lm_head:[2,2,1,""]},"comet.models.estimators":{comet_estimator:[2,0,0,"-"],estimator_base:[2,0,0,"-"],quality_estimator:[2,0,0,"-"]},"comet.models.estimators.comet_estimator":{CometEstimator:[2,1,1,""]},"comet.models.estimators.comet_estimator.CometEstimator":{ModelConfig:[2,1,1,""],configure_optimizers:[2,2,1,""],forward:[2,2,1,""],prepare_sample:[2,2,1,""]},"comet.models.estimators.estimator_base":{Estimator:[2,1,1,""]},"comet.models.estimators.estimator_base.Estimator":{ModelConfig:[2,1,1,""],compute_loss:[2,2,1,""],compute_metrics:[2,2,1,""],document_predict:[2,2,1,""],get_sentence_embedding:[2,2,1,""],predict:[2,2,1,""],read_csv:[2,2,1,""]},"comet.models.estimators.quality_estimator":{QualityEstimator:[2,1,1,""]},"comet.models.estimators.quality_estimator.QualityEstimator":{forward:[2,2,1,""],prepare_sample:[2,2,1,""],read_csv:[2,2,1,""]},"comet.models.model_base":{ModelBase:[2,1,1,""]},"comet.models.model_base.ModelBase":{ModelConfig:[2,1,1,""],compute_loss:[2,2,1,""],compute_metrics:[2,2,1,""],configure_optimizers:[2,2,1,""],forward:[2,2,1,""],freeze_encoder:[2,2,1,""],langid:[2,2,1,""],on_epoch_end:[2,2,1,""],predict:[2,2,1,""],prepare_sample:[2,2,1,""],read_csv:[2,2,1,""],setup:[2,2,1,""],test_dataloader:[2,2,1,""],test_epoch_end:[2,2,1,""],test_step:[2,2,1,""],train_dataloader:[2,2,1,""],training_step:[2,2,1,""],unfreeze_encoder:[2,2,1,""],val_dataloader:[2,2,1,""],validation_epoch_end:[2,2,1,""],validation_step:[2,2,1,""]},"comet.models.model_base.ModelBase.ModelConfig":{model:[2,3,1,""],namespace:[2,2,1,""],test_path:[2,3,1,""],train_path:[2,3,1,""],val_path:[2,3,1,""],warmup_steps:[2,3,1,""]},"comet.models.ranking":{comet_ranker:[2,0,0,"-"],ranking_base:[2,0,0,"-"]},"comet.models.ranking.comet_ranker":{CometRanker:[2,1,1,""]},"comet.models.ranking.comet_ranker.CometRanker":{compute_loss:[2,2,1,""],compute_metrics:[2,2,1,""],forward:[2,2,1,""],predict:[2,2,1,""],prepare_sample:[2,2,1,""]},"comet.models.ranking.ranking_base":{RankingBase:[2,1,1,""]},"comet.models.ranking.ranking_base.RankingBase":{compute_loss:[2,2,1,""],compute_metrics:[2,2,1,""],forward:[2,2,1,""],get_sentence_embedding:[2,2,1,""],predict:[2,2,1,""],read_csv:[2,2,1,""]},"comet.modules":{feedforward:[2,0,0,"-"],scalar_mix:[2,0,0,"-"]},"comet.modules.feedforward":{FeedForward:[2,1,1,""]},"comet.modules.feedforward.FeedForward":{forward:[2,2,1,""]},"comet.modules.scalar_mix":{ScalarMixWithDropout:[2,1,1,""]},"comet.modules.scalar_mix.ScalarMixWithDropout":{forward:[2,2,1,""]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute"},terms:{"04154":2,"10464":2,"1536":[2,5],"1704":2,"1719":[3,4],"1812":2,"3072":2,"320":2,"32gb":2,"512":2,"73640":2,"768":[2,5],"abstract":2,"case":2,"class":[2,5],"default":[2,5],"export":4,"final":[2,5],"float":2,"function":[2,4,5],"import":[1,2,4],"int":2,"new":[0,2,5],"ol\u00e1":[4,5],"return":2,"true":[2,5],"while":2,NOT:2,Not:5,The:[2,3,5],These:2,Useful:2,Using:0,_variablefunct:2,abov:2,abs:2,accord:2,accordingli:5,accross:2,accumul:5,accumulate_grad_batch:5,across:2,activ:[2,5],adam:5,added:2,adjust:2,after:[2,4],afterward:2,all:[1,2,5],all_lay:2,also:[1,2,3],alt_length:2,alt_seq_len:2,alt_token:2,altern:2,although:2,amount:3,anchor:2,anchor_seq_len:2,ani:2,anoth:5,appli:[2,5],architectur:2,arg:2,argpars:2,argument:5,argumentpars:2,arxiv:2,assess:3,attent:5,auxiliar:0,avail:[0,2],averag:2,avg:[2,5],bad:2,bar:2,base:[0,3],batch:[2,5],batch_nb:2,batch_siz:[2,5],becaus:3,befor:[2,5],below:1,bert:5,bertencod:2,best:5,better:[2,3],between:[2,3],bidirect:2,bidirectin:2,binari:5,binary_x:2,binary_xentfor:5,bool:2,both:2,bpe:2,build:[2,3],call:2,can:[0,1,2,3,4],care:2,cell:2,check:[0,2],check_length:2,checkpoint:[2,5],cite:0,classif:2,classmethod:2,cli:4,closer:2,cls:[2,5],code:2,column:5,com:2,combin:[2,5],comet:[1,5],comet_estim:2,comet_rank:2,cometestim:[2,5],cometrank:[2,5],comma:2,command:[0,1,5],common:2,compar:3,compat:5,comput:2,compute_loss:2,compute_metr:2,config:5,configure_optim:2,consist:2,constant:5,contain:2,convert:2,correct:3,covert:2,creat:5,critic:2,cross:5,csv:[2,5],cuda:2,cudnn:5,current:0,cyclic:5,darr:3,data:[0,2,4],dataload:2,dataloader_idx:2,decai:[2,5],defin:2,depend:[2,5],describ:5,descript:[3,5],detect:2,determinist:5,develop:0,dict:[2,4],dictionari:2,differ:[2,3,5],dim:2,dim_0:2,dim_:2,dim_n:2,dimens:2,direct:3,displai:2,do_layer_norm:2,doc:2,document:2,document_predict:2,dont:2,download_model:4,drop:2,dropout:[2,5],dropout_valu:2,due:2,dure:[2,5],each:2,earli:5,early_stop:5,edit:3,effect:2,embed:[2,5],embed_dim:2,emnlp:3,enabl:5,encod:[0,3,5],encoder_bas:2,encoder_learning_r:[2,5],encoder_model:[2,5],encoder_out:2,ensur:5,entir:2,entropi:5,epoch:[2,5],equival:2,error:5,especi:1,est:[4,5],estim:[0,3,4],estimator_bas:2,eval:2,even:3,everi:2,exampl:[2,3,5],exceed:2,exemplo:[4,5],expect:[2,5],extend:2,extent:2,extra:2,extract:[2,5],face:2,facebook:2,facebookresearch:2,fairseq:2,fals:[2,5],featur:2,feed:5,feedforward:2,file:[2,4,5],final_activ:[2,5],finder:5,fine:[2,5],first:[2,3],fit:5,flag:[0,2,4],follow:[0,2,4,5],format:0,former:2,forward:5,four:3,framework:[0,2],free:0,freez:2,freeze_embed:2,freeze_encod:2,freze:2,from:[2,3,4,5],from_pretrain:2,frozen:[2,5],further:[2,5],gamma:2,get:2,get_sentence_embed:2,github:2,given:2,goal:2,good:2,gplv3:0,gpu:[2,5],gradient:5,group:2,handl:2,have:1,head:2,hello:[4,5],help:1,hf_token:2,hftextencod:2,hidden:[2,5],hidden_s:[2,5],high:2,hook:2,how:5,hparam:2,hter:3,html:2,http:2,hug:2,human:[3,5],hyper:2,hyperparamet:2,hyperparticl:2,hyphotesi:2,hypothesi:[2,3,4,5],identifi:2,ignor:[2,5],implement:2,improv:5,in_dim:2,in_featur:2,index:2,inf:2,infer:2,initi:2,initial_data:2,initial_scalar_paramet:2,input:2,insid:[1,2],instal:[0,4],instanc:2,instead:[1,2,4],integ:2,interest:2,interfac:[0,1,2],internali:2,introduc:3,isto:[4,5],its:2,json:4,judgement:3,judgment:5,just:[2,5],keep:[2,5],keep_embeddings_frozen:[2,5],kei:2,kendal:[2,5],kind:3,kwarg:2,lambdalr:2,langaug:2,langid:2,languag:2,larg:[2,3,4,5],laser:5,laserencod:2,last_hidden_st:2,latter:2,layer:5,layerwise_decai:[2,5],layerwise_lr:2,learn:[2,5],learning_r:[2,5],least:2,left:2,left_pad:2,lenght:2,length:2,less:2,level:2,librari:5,lightn:2,like:2,line:[0,1],linear_warmup:5,list:[2,3,4],lm_head:2,load:[2,5],load_weight:[2,5],loader_work:[2,5],logger:2,logit:5,longtensor:2,look:2,loss:[2,5],low:3,lr_finder:5,lr_schedul:2,lstm:2,machin:5,macro:2,main:2,make:[3,5],mani:[2,5],margin:2,mask:2,mass:2,master:2,match:2,max:[2,5],max_posit:2,maxim:5,mean:5,measur:[2,3],mechan:5,memori:[2,5],metric:[0,2],metric_mod:5,micro:2,might:[1,5],min:5,min_delta:5,minim:5,mix:[2,5],mixtur:2,mixture_s:2,mode:[2,5],model:[0,3,4],model_bas:2,model_out:2,modelbas:2,modelconfig:2,modul:[0,5],monitor:[2,5],mse:[2,5],mt_length:2,mt_seq_len:2,mt_token:2,multilingu:0,multipl:2,mundo:[4,5],must:2,my_config:5,name:[2,5],namespac:2,need:[2,3,5],neg:2,neg_length:2,neg_seq_len:2,neg_token:2,network:[2,5],neural:[0,2,5],new_ord:2,none:[2,5],normal:2,note:[1,3,5],now:1,nr_frozen_epoch:[2,5],num_embed:2,num_lay:2,number:[2,5],on_epoch_end:2,one:2,ones:[2,5],onli:[2,3,5],open:0,optim:[2,3,5],option:[2,5],optmiz:2,order:2,org:2,origin:2,other:2,ouput:4,our:[0,1,2,3,5],out_dim:2,output:[2,4,5],output_unit:2,overal:2,overridden:2,overwrit:2,own:0,packag:1,pad:2,padding_idx:2,padding_valu:2,paper:[0,2,3],parallel:2,param:2,paramet:2,parameteris:2,pass:2,path:[2,4,5],patienc:5,perform:[0,2],period:2,pip3:1,pip:1,pleas:[0,1,3],pool:[2,5],pooler_output:2,pos:2,pos_length:2,pos_seq_len:2,pos_token:2,posit:2,predict:[2,4],prepar:[2,5],prepare_data:2,prepare_sampl:2,pretrain:[2,5],pretrained_model:[2,5],previou:2,privat:2,probabl:2,process:2,produc:[2,3],progress:2,project:1,properti:2,provid:3,purpos:0,python:[0,1],pytorch:[2,5],quality_estim:2,qualityestim:[2,5],rank:[0,3],ranker:[3,5],ranking_bas:2,rankingbas:2,rate:[2,5],read:2,read_csv:2,readthedoc:2,receiv:2,recip:2,recommend:3,record:2,redirect:2,redistribut:2,ref:[2,4,5],ref_anchor:2,ref_length:2,ref_seq_len:2,ref_token:2,refer:[4,5],regist:2,regress:[2,3],regular:2,rel:3,reli:5,reorder:2,reorder_output:2,replac:2,repres:2,reproduc:5,requir:[1,2,5],respect:2,result:[2,4],review:3,right:2,roberta:2,run:[0,1,2,5],s_k:2,same:[2,3],sampl:[2,4,5],save:[2,4,5],save_top_k:5,scalar:2,scalar_mix:2,scalar_mix_dropout:[2,5],scalarmixwithdropout:2,schedul:[2,5],score:[2,3,4,5],seed:5,segment:[2,5],select:2,sensit:5,sentemb:2,sentenc:[2,3,5],separ:2,seq_len:2,sequenc:2,set:[2,5],setup:[2,5],shape:2,share:[2,3],should:2,show:2,show_progress:2,sigmoid:[2,5],silent:2,similar:2,simpl:2,sinc:[1,2,3],singl:2,size:[2,5],slower:5,small:2,softmax:2,softwar:0,some:[2,5],sourc:[0,2,4,5],specif:2,specifi:2,splite:2,squar:5,src:[2,4,5],src_anchor:2,src_length:2,src_seq_len:2,src_token:2,stabl:2,stack:2,stage:2,state:2,step:[2,5],still:3,stop:5,str:2,string:2,structur:2,subclass:2,submiss:3,sum:2,sure:3,system:[0,2,3,5],take:2,tanh:5,target:2,task:[2,3],tau:2,techniqu:[2,5],tensor:2,tensor_k:2,test:[2,3,5],test_dataload:2,test_epoch_end:2,test_path:[2,5],test_step:2,text:2,textencoderbas:2,than:2,thei:[2,3],them:2,thi:[1,2,3,4,5],those:2,through:2,thu:3,timestep:2,to_json:4,token:2,tokenizer_bas:2,top:[3,5],torch:2,toward:3,tqdm:2,train:[0,2,3],train_dataload:2,train_path:[2,5],trainabl:2,trainer:2,training_step:2,translat:[3,5],tree:2,triplet:2,tripletmarginloss:2,tune:[2,5],tupl:2,two:[0,2],txt:4,type:[3,5],typic:2,udifi:2,unbabel:1,unbound:2,under:3,unfreez:2,unfreeze_encod:2,unfreze:2,union:2,unknown:2,unnorm:2,usag:2,use:[0,3],used:[0,2,5],useful:[2,5],user:2,uses:[2,3,5],using:[2,4],usual:2,util:2,val_dataload:2,val_path:[2,5],valid:[2,5],validation_end:2,validation_epoch_end:2,validation_step:2,valu:[2,4],vector:2,verbos:5,version:[1,2],vocabulari:2,wai:2,want:[2,5],warmup:[2,5],warmup_const:5,warmup_step:[2,5],warn:2,weight:[2,5],were:3,when:[2,3],where:[2,3,4],which:2,wise:5,wish:[2,5],within:2,without:5,wmt17:3,wmt18:3,wmt19:[2,3],wmt2020:3,wmt:[3,4],word:[2,5],word_embed:2,wordemb:2,worker:[2,5],world:[4,5],wors:2,xlm:3,xlmr:[2,5],xlmr_token:2,xlmrencod:2,xlmrmodel:2,xlmrtextencod:2,yaml:[2,5],you:[0,1,2,3,4],your:[0,1,2,4],zip:4},titles:["COMET: High-quality Machine Translation Evaluation","Installation","Library Reference","COMET Metrics","Running COMET","Train your own Metric"],titleterms:{Using:4,attent:2,auxiliar:2,base:[2,5],bert:2,citat:0,comet:[0,2,3,4],command:4,configur:5,content:0,data:5,encod:2,estim:[2,5],evalu:0,feed:2,flag:5,format:5,forward:2,high:0,instal:1,interfac:4,laser:2,layer:2,librari:[0,2],licens:0,lightn:5,line:4,machin:0,mechan:2,metric:[3,5],model:[2,5],modul:2,multilingu:2,own:5,python:4,qualiti:[0,2],rank:2,ranker:2,refer:[0,2],run:4,specif:5,train:5,trainer:5,translat:[0,2],what:0,wise:2,xlm:2,your:5}})