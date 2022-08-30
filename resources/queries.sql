select * from usage where strikes > 0 and "updatedAt" > NOW() - INTERVAL '1 DAY' order by "updatedAt" DESC;
select * from short ORDER BY clicks DESC LIMIT 30;
select short.id, short.destination from short inner join organisation on "organisationId" = "organisation"."id" inner join subscription on "subscription"."organisationId" = "organisation"."id" where "subscription"."planProviderId" = 'free-tier' and "short"."createdAt" > NOW() - INTERVAL '5 DAY' order by "short"."updatedAt" DESC;
select short.id, short.destination from short inner join organisation on "organisationId" = "organisation"."id" where "organisation"."id" = '069d6989-a38e-4c40-8f87-53bcebd5d2a1';
select pg_size_pretty (pg_relation_size('session'));