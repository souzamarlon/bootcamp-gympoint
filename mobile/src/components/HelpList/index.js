import React, { useMemo } from 'react';

import { parseISO, formatRelative } from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz';

import pt from 'date-fns/locale/pt';

import { Container, Info, Name, Time, Text } from './styles';

export default function HelpList({ data, onPress }) {
  const dateTimeUTC = zonedTimeToUtc(new Date(), 'America/Brasília');

  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(data.created_at), dateTimeUTC, {
      locale: pt,
      addSuffix: true,
    });
  }, [data.created_at, dateTimeUTC]);

  console.tron.log(data);

  return (
    <Container onPress={onPress}>
      <Info>
        <Name answer={data.answer}>
          {data.answer ? 'Respondido' : 'Sem resposta'}
        </Name>
        <Time>{dateParsed}</Time>
      </Info>
      <Text>{data.question}</Text>
    </Container>
  );
}
